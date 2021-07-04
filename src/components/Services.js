import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state = {
        services :[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info: "lorem ipsum dolor dit amet consecteter adipisicing elit . magin corpris"
            },
             {
                icon:<FaHiking />,
                title:"Endles Hiking",
                info: "lorem ipsum dolor dit amet consecteter adipisicing elit . magin corpris"
            },
             {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info: "lorem ipsum dolor dit amet consecteter adipisicing elit . magin corpris"
            },
             {
                icon:<FaBeer />,
                title:"Srongest Beer",
                info: "lorem ipsum dolor dit amet consecteter adipisicing elit . magin corpris"
            }

        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return <article key={index} className="service" >
                           <span >{item.icon}</span>
                           <h6 >{item.title}</h6>
                           <p >{item.info}</p>
                       </article>
                   })}
               </div>
            </section>
        )
    }
}
