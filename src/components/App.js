import React from 'react'
import {connect} from 'react-redux'

import {Button} from '@material-ui/core'
import styled from 'styled-components'
import { getTruthiness } from '../selectors'
import { setTrue, setFalse } from '../actions'

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

class App extends React.Component {

    render() {
        return (
            <FlexRow>
                <Button onClick={this.props.setTrue} variant="contained" color="primary">Set True</Button>
                <Button onClick={this.props.setFalse} variant="contained" color="primary">Set False</Button>
                <div>The value is {this.props.truthiness}</div>
            </FlexRow>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        truthiness: getTruthiness(state)
    }
}

export default connect(mapStateToProps, {setTrue, setFalse})(App);