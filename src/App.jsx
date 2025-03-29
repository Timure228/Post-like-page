import './App.css'
import {useState} from "react";

function App() {

    const title1 = document.getElementById("my-title");
    title1.textContent = "DOM";


    const [inputs, setInputs] = useState({
        title: "",
        message: "",
        showUserBy: "nickname",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The Title you entered was: " + inputs.title)
        alert("Send new post " + JSON.stringify(inputs))
    }

    const handleOnChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(inputs => ({...inputs, [name]: value}))
    }

    return (
        <>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Show user by:</label>
                <select name="showUserBy" value={inputs.showUserBy} onChange={(e) => handleOnChange(e)}>
                    <option value="nickname">Nickname</option>
                    <option value="emailadress">Email-Adresse</option>
                    <option value="none">Keine Anzeige</option>
                </select>

                <label>Title:
                    <input type="text" name="title" onChange={(e) => handleOnChange(e)}/>
                </label>
                <label>Message</label>
                <textarea
                    type="textarea"
                    name="message"
                    value={inputs.message}
                    onChange={(e) => handleOnChange(e)}
                    rows="5"
                    cols="26"
                />
                <input type="submit"/>

                <label>
                    <input
                        type="radio"
                        name="visibility"
                        checked={inputs.visibility === "Private"}
                        value="Private"
                        onChange={(e) => handleOnChange(e)}
                    />Private
                </label>
                <label>
                    <input
                        type="radio"
                        name="visibility"
                        checked={inputs.visibility === "Public"}
                        value="Public"
                        onChange={(e) => handleOnChange(e)}
                    />Public
                </label>
                <label>Tags:</label>
                <label>
                    <input type="checkbox"
                           name="tag"
                           value="sport"
                           checked={inputs.tag === "sport"}
                           onChange={(e) => handleOnChange(e)}/>
                    Sport
                </label>
                <label>
                    <input type="checkbox"
                           name="tag"
                           value="news"
                           checked={inputs.tag === "news"}
                           onChange={(e) => handleOnChange(e)}/>
                    News
                </label>
                <label>
                    <input type="checkbox"
                           name="tag"
                           value="people"
                           checked={inputs.tag === "people"}
                           onChange={(e) => handleOnChange(e)}/>
                    People
                </label>
            </form>
        </>
    )
}

export default App
