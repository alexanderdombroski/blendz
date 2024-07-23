import { FormEvent, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { queryCollection, writeData, deleteEntry, fireObj } from "./scripts/database";

const sessionId = uuidv4();

let starsRated = 0;
let lastEntry: reviewData;

function ContactPage() {
    const [ratings, setRatings] = useState<fireObj[]>([]);
    useEffect(() => { (async () => {
        setRatings(await queryCollection("reviews", 10));
    })();
}, []);

    return (
        <main id="ContactPage">
            <h1>Leave a Review</h1>
            <form id="rating-form" onSubmit={(e) => submit(e)}>
                <label htmlFor="rater-name">Name: </label>
                <input type="text" name="rater-name" id="rater-name"/>
                <p id="rating-stars">
                    <span onClick={() => setStars(1)}>☆</span>
                    <span onClick={() => setStars(2)}>☆</span>
                    <span onClick={() => setStars(3)}>☆</span> 
                    <span onClick={() => setStars(4)}>☆</span>
                    <span onClick={() => setStars(5)}>☆</span>
                </p>
                <label htmlFor="review">Brief Review: </label>
                <textarea name="review" id="review" maxLength={200}></textarea>
                <input type="submit"/>
            </form>
            <section className="reviews">
            {ratings.length !== 0 && (
                (ratings as reviewData[]).map(rev => reviewCard(rev))
            )}
            </section>
        </main>
    )
}

const isStar = (val: number, req: number) => val >= req ? "⭐️" : "☆";

function setStars(amount: number) {
    const stars: NodeListOf<HTMLSpanElement> = document.querySelectorAll("#rating-stars span");
    stars.forEach(star => star.innerText = "☆");
    starsRated = amount;
    for (var i=0; i<amount; i++) {
        stars[i].innerText = "⭐️";
    }
}

interface reviewData {
    id: string;
    name: string;
    stars: number;
    review: string;
}

function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form: HTMLFormElement = event.currentTarget;
    const name = (form.querySelector("#rater-name") as HTMLInputElement).value;
    
    const formDetails: reviewData = {
        id: sessionId,
        name: name === "" ? "Anonymous" : name,
        stars: starsRated,
        review: (form.querySelector("#review") as HTMLTextAreaElement).value ?? ""
    }
    
    writeData("reviews", formDetails, sessionId);
    form.reset();
    const reviewBox = document.querySelector(".reviews") as HTMLElement;
    reviewBox.innerHTML = `
        <div class="deleter">
            <h2 id="submitted">Review has been Submitted</h2>
            <button>Click to Undo</button>
        </div>
        ${reviewBox.innerHTML}`;
    lastEntry = formDetails;
    (document.querySelector('.deleter button') as HTMLButtonElement).addEventListener('click', () => undoEntry(lastEntry.id));
}

function undoEntry(id: string) {
    deleteEntry("reviews", id);
    const div = document.querySelector(".deleter");
    if (div !== null) {
        (div as HTMLElement).hidden = true;
    }
    (document.getElementById("rater-name") as HTMLInputElement).value = lastEntry.name;
    setStars(lastEntry.stars);
    (document.getElementById("review") as HTMLTextAreaElement).value = lastEntry.review;
}

function reviewCard(rev: reviewData) {
    return (
    <article key={rev.id} className="review">
        <h2>{rev.name}</h2>
        <p>
            <span>{isStar(rev.stars, 1)}</span>
            <span>{isStar(rev.stars, 2)}</span>
            <span>{isStar(rev.stars, 3)}</span>
            <span>{isStar(rev.stars, 4)}</span>
            <span>{isStar(rev.stars, 5)}</span>
        </p>
        <p>{rev.review}</p>
    </article>
    );
}

export default ContactPage;