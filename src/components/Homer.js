import React, { Component } from "react";
// import Search from "./Search";
import resultApi from "../api/youtube";
// import VideoData from "./VideoData";
// import CK from "./CK.gif";
import { Link } from "react-router-dom";



export default class Homer extends Component {
    constructor(){
        super()

        this.state = {
            input: "",
            videos: []
        }
    }

    onSearch = async () => {
        const { input } = this.state
        const videos = await resultApi.result(input)
        this.setState({ videos, input: "" })
    }

    onChanged = (e) => {
        this.setState({ input: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.onSearch();
        }

        render() {
            const { input, videos } = this.state;
                const list = videos.map((e) => {
                    return (

                        <Link key={e.id.videoId} to={`/video/${e.id.videoId}`}>
                            <li>
                                <img
                                    src={e.snippet.thumbnails.default.url}
                                    alt={e.snippet.description}
                                    style={{width: "200px", height: "200px"}}
                                />
                                <h4>{e.snippet.title}</h4>
                            </li>
                        </Link>
                    )
                })

                return (
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <input
                                onChange={this.onChanged}
                                type="text"
                                placeholder="search"
                                value={input}

                            />
                            <button type="submit">submit</button>
                        </form>

                        <div>
                            {list}
                        </div>
                    </div>
                )
        }
    }
