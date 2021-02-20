import React, { Component } from 'react';
import './Homepage.css';
import {projectData} from '../data.js';
import square from '../img/square.jpg';
import brainstorm from '../img/square.jpg';
import camera from '../img/square.jpg';
import forest from '../img/square.jpg';
import station from '../img/station.jpg';

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myProjectList: [],
             inSelectMode: false
        }
        this.toggleSelect = this.toggleSelect.bind(this);
        this.selectThisProject = this.selectThisProject.bind(this);
    }

    componentDidMount() {
        this.setState({
            // myProjectList: projectData
        },
        ()=>console.log(this.state.myProjectList))
    }

    toggleSelect() {
        this.setState(prevState => ({
            inSelectMode: !prevState.inSelectMode
        }))
    }

    selectThisProject(i) {
        //every time you submit this task, add taskName to the list and render
        this.setState(prevState => ({
            myProjectList:[...prevState.myProjectList, i]
        }))
        
        console.log(this.state.myProjectList);
    }

    removeThisProject(i) {
        //delete the task associated with this button
        var newArr = this.state.myProjectList.filter((proj) => {
            return (proj.key !== i.key);
        });

        this.setState({
            myProjectList: newArr
        });
    }
    
    render() {
        let inSelectModeClass = this.state.inSelectMode ? "isVisible" : "notVisible";
        let selectedProjects = this.state.myProjectList.map(
            proj => 
            <div>
                <div className = 'aSelectedProj' key={proj.key} id={proj.key}> 
                    {proj.title}
                </div> 
            </div>);

        return (
            <div>
                <div className="project-container">
                    {projectData.map(item => {
                        return (
                        <div key={item.id} className='project'>
                            <div className='project-inner'>
                                <div className='project-front'>

                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>Number of ideas: {item.ideas}</p>
                                    <p>Number of engaged users: {item.users}</p>
                                    {/* <p>Start date: {item.startAt}</p>
                                    <p>End date: {item.endAt}</p> */}
                                </div>

                                <div className='project-back'>
                                    <img src={station} alt='pic'/> 
                                    <button onClick={()=>this.selectThisProject(item)} className='project-select'>Select this Project</button>
                                    <button onClick={()=>this.removeThisProject(item)} className='project-remove'>Remove this Project</button>
                                </div>
                            </div>   
                        </div>
                        )
                    
                    })}
                </div>

                <button className="project-subscribe" onClick={this.toggleSelect}>
                    View Your Selected Projects
                </button>

                <div className={inSelectModeClass}>
                    <h2>List of selected projects:</h2>
                    {selectedProjects}
                </div>
            </div>
        )
    }
}

export default Homepage