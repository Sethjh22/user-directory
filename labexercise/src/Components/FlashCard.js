import React,{Component} from 'react'
import CardInfo from './CardInfo'
import Buttons from './Buttons'
import data from './data'

class FlashCard extends Component{
    constructor(){
        super()
        this.state = {
            data,
            index: 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)

    }

    increase(){
        if(this.state.index < this.state.data.length - 1){
            this.setState({index: this.state.index + 1})
        }
    }
    decrease(){
        if(this.state.index > 0){
            this.setState({index: this.state.index -1})
        }
    }


    render(){
        return(
            <section>
                <CardInfo data={this.state.data} index={this.state.index}/>
                <Buttons increase={this.increase} decrease={this.decrease}/>
            </section>
        )
    }
}
export default FlashCard