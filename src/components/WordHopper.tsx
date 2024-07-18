import React, { Component, createRef } from "react";
import "../styles/TextHopper.css";

interface WordCyclerArgs {
    phrases: string[];
}

interface WordCyclerState {
    incrementer: number;
    canAnimate: boolean;
}

class WordCycler extends Component<WordCyclerArgs, WordCyclerState> {
    private wordRef: React.RefObject<HTMLParagraphElement>;

    constructor(props: WordCyclerArgs) {
        super(props);
        this.state = {
            incrementer: 0,
            canAnimate: true
        };
        this.wordRef = createRef();
        this.nextWord = this.nextWord.bind(this);
        this.animate = this.animate.bind(this);
    }

    public nextWord() {
        if (!this.state.canAnimate) return;

        this.setState((prevState) => ({
            incrementer: prevState.incrementer + 1,
            canAnimate: false
        }), () => {
            setTimeout(() => {
                this.setState({ canAnimate: true });
            }, 4000);
            this.animate();
        });
    }

    public animate() {
        const spans = this.wordRef.current?.querySelectorAll('span');
        spans?.forEach(span => {
            span.classList.add('wave-animate');
            // Remove the className after the animation duration to reset
            setTimeout(() => span.classList.remove('wave-animate'), 4000);
        });
    }

    public render() {
        const { phrases } = this.props;
        const { incrementer } = this.state;
        const word = phrases[incrementer % phrases.length];

        return (
            <p className="wave-word" ref={this.wordRef}>
                {
                    word.split('').map((char, index) => (
                        <span key={index} style={{ '--index': index } as React.CSSProperties}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))
                }
            </p>
        );
    }
}

export default WordCycler;
