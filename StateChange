class SampleStateChange extends Component {
    constructor(props) {
        super(props)
        this.state = {
           city: null
        }
    }
    
    updateMyState = (city) => this.setState({city})
    
    render() {
        return (
            <div>
                <input placeholder="Write text" onChange={(e) => this.updateMyState(e.target.value)} />
            </div>
        )
    }
}
