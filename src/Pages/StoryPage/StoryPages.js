import React from 'react'
import StoryPageView from '../../Components/StoryPageComponents/StoryPageView'

export default function StoryPages(props) {
    return (
        <div>
            <StoryPageView history={props.history}></StoryPageView>
        </div>
    )
}
