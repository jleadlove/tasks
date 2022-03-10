import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>("red");
    function updateCurrentColor(event: ChangeEvent) {
        setCurrentColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="color"
                        id="radioColors"
                        onChange={updateCurrentColor}
                        label={color}
                        value={color}
                        checked={currentColor === color}
                        style={{
                            backgroundColor: color
                        }}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
                    {currentColor}
                </span>
                .
            </div>
        </div>
    );
}
