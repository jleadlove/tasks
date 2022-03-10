// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEventHandler, useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, checkUserAnswer] = useState<string>("");
    function checkMatching(event: ChangeEvent) {
        checkUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="answerChecker">
                <Form.Label column sm={2}>
                    Check Answer:
                </Form.Label>
                <Form.Control value={userAnswer} onChange={checkMatching} />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
