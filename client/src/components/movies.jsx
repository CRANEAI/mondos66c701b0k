
/*
movies view
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
import { Row, Col , Navbar, NavItem, NavbarBrand, Button, Nav } from 'reactstrap';
        
        
        import {  }  from '../actions/moviesActions.js'; 

        
        
       
        class moviesView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        <Navbar color="light navigation-bar-white-standard" light expand="md"> 
    <NavbarBrand>movies</NavbarBrand> 
</Navbar> 
			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-block-white"> movies </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-gray"> popular </p>
			</Col>

			<Col md={12}>
				<p className="label-block-lavender"> trending </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> late st </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> 7ju|y 2017 o </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> 7 july 2017 </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-blue-lavender-small"> wamh </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> dxrector jon watts </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> vector jon watts </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block-small"> - wmters jonathan go‘dsteinjohn francis daley </p>
			</Col>

			<Col md={12}>
				<p className="label-block-lavender-small"> 4(— tom ho‘land chhae‘ keaton, ruben downey </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block-small"> 15002 </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block"> ijulylvll </p>
			</Col>

			<Col md={12}>
				<p className="label-block-light-blue-small"> i </p>
			</Col>

			<Col md={12}>
				<p className="label-light-sky-blue-gray"> uwuw juh vvau: </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block-small"> wnters jonathan go‘dsteinjohn francws da‘ey </p>
			</Col>

			<Col md={12}>
				<p className="label-navy-blue-lavender-small"> m tom hohand chhae1 keaton, robert downey </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for movies button-lavender-blue-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-lavender-blue-block" 
                        onClick={() => this.movies()}>movies</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for favourite button-white-standard action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard" 
                        onClick={() => this.favourite()}>favourite</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for m-theatres button-white-standard action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard" 
                        onClick={() => this.m-theatres()}>m-theatres</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for notifications button-white-standard action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard" 
                        onClick={() => this.notifications()}>notifications</Button> 

			</Col>

			<Col md={12}>
				<p className="label-block-white"> profile </p>
			</Col>

			<Col md={12}>
				<p className="label-block-white"> favourite </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block"> m-theatres </p>
			</Col>

			<Col md={12}>
				<p className="label-lavender-block"> notifications </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for wamh button-lavender-light-purple action --> */}
				<Button 
                        className="btn btn-lg btn-block button-lavender-light-purple" 
                        onClick={() => this.wamh()}>wamh</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for watch button-lavender-blue-lavender action --> */}
				<Button 
                        className="btn btn-lg btn-block button-lavender-blue-lavender" 
                        onClick={() => this.watch()}>watch</Button> 

			</Col>

<Nav tabs> 
</Nav> 
<Nav tabs> 
</Nav> 

                           
   
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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(moviesView);
    
        