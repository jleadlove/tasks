import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);
    function updateUserAnswer(event: ChangeEvent) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
                <Form.Group controlId="multChoiceQuestion">
                    <Form.Select value={userAnswer} onChange={updateUserAnswer}>
                        {options.map((answerOption: string) => (
                            <option key={answerOption} value={answerOption}>
                                {answerOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
