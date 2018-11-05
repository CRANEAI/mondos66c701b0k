
/*
archibald fountain. 1a prince albe... view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the movies view has a status bar located at the very-top across the full width of the view
the movies view has a status bar located at the very-top across the full width of the view
the movies view has a status bar located at the very-top in the center of the view
movies view has Navigation Bar located at the very-top across the full width of the view
movies view has Navigation Bar located at the very-top across the full width of the view
movies view has Navigation Bar located at the very-top across the full width of the view
movies view has an Image located at the very-top center of the view. this is a placeholder and should be updated with higher resolution Image
movies view has Label located at the very-top center of the view, text needs identified
movies view has Label located at the very-top center of the view, text needs identified
movies view has Label located at the very-top center of the view, text needs identified
movies view has Label located at the very-top center of the view, text needs identified
movies view has Label located at the very-top center of the view, text needs identified
movies view has Label located at the very-top left of the view, text needs identified
movies view has Label located at the very-top left of the view, text needs identified
movies view has an Image located at the very-top across the full width of the view. this is a placeholder and should be updated with higher resolution Image
movies view has an Image located at the top across the full width of the view. this is a placeholder and should be updated with higher resolution Image
movies view has an Image located at the main area left of the view. this is a placeholder and should be updated with higher resolution Image
movies view has Label located at the main area center of the view, text needs identified
movies view has Label located at the main area center of the view, text needs identified
the movies view has a Pager located at the main area center of the view, correct text needs defined
movies view has a Label located at the main area center of the view with text wamh
movies view has Label located at the main area center of the view, text needs identified
movies view has Label located at the main area center of the view, text needs identified
movies view has Label located at the mid-bottom center of the view, text needs identified
movies view has Label located at the mid-bottom center of the view, text needs identified
movies view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
movies view has Label located at the mid-bottom center of the view, text needs identified
movies view has Label located at the mid-bottom center of the view, text needs identified
movies view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
movies view has Label located at the mid-bottom center of the view, text needs identified
movies view has Label located at the main area center of the view, text needs identified
movies view has Label located at the main area center of the view, text needs identified
movies view has Label located at the main area center of the view, text needs identified
movies view has Label located at the bottom center of the view, text needs identified
movies view has a Tabbar located at the bottom in the center of the view, text of nested elements need better identified
movies view has a Tabbar located at the bottom in the center of the view, text of nested elements need better identified
movies view has Label located at the bottom right of the view, text needs identified
movies view has Label located at the bottom center of the view, text needs identified
movies view has Label located at the bottom center of the view, text needs identified
movies view has Label located at the bottom center of the view, text needs identified
movies view has Label located at the bottom left of the view, text needs identified
the create account view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the create account view has a search icon located at the very-top center of the view which on click will trigger the search() action
the create account view has a notification icon located at the bottom center of the view which on click will trigger the notification() action
the live view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the live view has a search icon located at the very-top center of the view which on click will trigger the search() action
the live view has a notification icon located at the bottom center of the view which on click will trigger the notification() action
the signup view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the signup view has a search icon located at the very-top center of the view which on click will trigger the search() action
the signup view has a notification icon located at the bottom center of the view which on click will trigger the notification() action
the payment view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the payment view has a search icon located at the very-top center of the view which on click will trigger the search() action
the payment view has a notification icon located at the bottom center of the view which on click will trigger the notification() action
the archibald fountain. 1a prince albe... view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the archibald fountain. 1a prince albe... view has a search icon located at the very-top center of the view which on click will trigger the search() action
the archibald fountain. 1a prince albe... view has a notification icon located at the bottom center of the view which on click will trigger the notification() action
the movies view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the movies view has a search icon located at the very-top center of the view which on click will trigger the search() action
the movies view has a notification icon located at the bottom center of the view which on click will trigger the notification() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button, Navbar, NavItem, NavbarBrand, Input, InputGroup, InputGroupText } from 'reactstrap';
        
        
        import {  }  from '../actions/archibald_fountain._1a_prince_albe...Actions.js'; 

        
        
       
        class archibaldfountain.1aprincealbe...View extends React.Component {

            state = {
                
                my_location : '', 

            }
    
            
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12}>
				<p className="label-light-purple-very-light-blue-small"> ( q my location 4 </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for back button-light-purple-very-light-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-purple-very-light-blue" 
                        onClick={() => this.back()}>back</Button> 

			</Col>

<Navbar color="light navigation-bar-light-purple-very-light-blue" light expand="md"> 
    <NavbarBrand>archibald fountain. 1a prince albe...</NavbarBrand> 
</Navbar> 
			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group input-light purple-very light blue" 
                                        value={this.state.my_location}
                                        onChange={this.handleChange}
                                        name="my_location"
                                        placeholder="my location" />				</InputGroup>			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-gray-white-paragraph"> sydney </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block-small"> haymarkﬁt </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> 15 min (4.9 km) </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for i_get_directions_| button-blue-light-sky-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-blue-light-sky-blue" 
                        onClick={() => this.i_get_directions_|()}>i get directions |</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for get_directions button-blue-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-blue-block" 
                        onClick={() => this.get_directions()}>get directions</Button> 

			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(archibaldfountain.1aprincealbe...View);
    
        