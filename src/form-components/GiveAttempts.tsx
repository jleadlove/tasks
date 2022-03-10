/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function updateRequested(event: ChangeEvent) {
        setRequested(event.target.value);
    }
    function requestAttempts(attempts: number, requested: string) {
        setAttempts((attempts += parseInt(requested) || 0));
    }
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                />
            </Form.Group>
            <h4>Number of attempts left: {attempts}</h4>
            <Button
                onClick={() => requestAttempts(attempts - 1, "0")}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    parseInt(requested) >= 0
                        ? requestAttempts(attempts, requested)
                        : requestAttempts(attempts, "0")
                }
                value={attempts}
            >
                gain
            </Button>
        </div>
    );
}
