import React, { Component } from 'react';
import Icecream from '../../components/Icecream/Icecream'
import Builder from '../../components/Builder/Builder'
import classes from '../IcecremBuilder/IcecreamBuilder.module.css'

class IcecreamBuilder extends Component {
    state={
        items:{
            vanilla:45,
            chocolate:50,
            lemon:35,
            orange:40,
            strawberry:60,
        },
        scoops:[],
        totalPrice:0
    }

    addScoop=(scoop)=>{
        const {scoops,items}=this.state
        const workScoops=[...scoops]
        workScoops.push(scoop)
        this.setState((prevState)=>{
            return{
            scoops:workScoops,
            totalPrice:prevState. totalPrice + items[scoop]
            }
        })
    }

      removeScoop=(scoop)=>{
        const {scoops,items}=this.state
        const workScoops=[...scoops]
        const scoopIndex=workScoops.findIndex((sc)=>sc===scoop)
        workScoops.splice(scoopIndex,1)
        workScoops.push(scoop)
        this.setState((prevState)=>{
            return{
            scoops:workScoops,
            totalPrice:prevState. totalPrice - items[scoop]
            }
        })
    }

    render() {
        const {items,totalPrice,scoops}=this.state
        return (
            <div className={['container',classes.container].join(' ')}>
                <Icecream scoops={scoops}/>
                <Builder items={items} 
                price={totalPrice} 
                add={this.addScoop}
                remove={this.removeScoop}
                scoops={scoops}/>
                
            </div>
        );
    }
}

export default IcecreamBuilder;