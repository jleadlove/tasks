import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateEditMode(event: ChangeEvent) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }

    if (editMode) {
        return (
            <div>
                <div>
                    <Form.Check
                        inline
                        type="switch"
                        id="edit-mode-switch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={updateEditMode}
                    />
                </div>
                <div>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
                <div>
                    <div>
                        <Form.Check
                            inline
                            type="checkbox"
                            label="Student?"
                            id="student-true"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </div>
                </div>
                <div>
                    {name} is{" "}
                    {student === true ? "a student." : "not a student."}
                </div>
            </div>
        );
    } else
        return (
            <div>
                <div>
                    <Form.Check
                        inline
                        type="switch"
                        id="edit-mode-switch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={updateEditMode}
                    />
                </div>
                <div>
                    {name} is{" "}
                    {student === true ? "a student." : "not a student."}
                </div>
            </div>
        );
}
