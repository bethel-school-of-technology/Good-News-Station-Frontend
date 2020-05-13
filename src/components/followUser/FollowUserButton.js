// import React from 'react';
// import { Link } from 'react-router';
// import agent from '../agent';
// import { connect } from 'react-redux';


// const FollowUserButton = props => {
//     if (props.isUser) {
//         return null;
//     }

//     let classes = 'btn btn-sm action-btn';
//     if (props.user.following) {
//         classes += ' btn-secondary';
//     } else {
//         classes += ' btn-outline-secondary';
//     }

//     const handleClick = ev => {
//         ev.preventDefault();
//         if (props.user.following) {
//             props.unfollow(props.user.username)
//         } else {
//             props.follow(props.user.username)
//         }
//     };

//     return (
//         <button
//             className={classes}
//             onClick={handleClick}>
//             <i className="ion-plus-round"></i>
//       &nbsp;
//             {props.user.following ? 'Unfollow' : 'Follow'} {props.user.username}
//         </button>
//     );
// };

// const mapStateToProps = state => ({
//     ...state.articleList,
//     currentUser: state.common.currentUser,
//     profile: state.profile
// });

// const mapDispatchToProps = dispatch => ({
//     onFollow: username => dispatch({
//         type: 'FOLLOW_USER',
//         payload: agent.Profile.follow(username)
//     }),
//     onLoad: payload => dispatch({ type: 'PROFILE_PAGE_LOADED', payload }),
//     onSetPage: (page, payload) => dispatch({ type: 'SET_PAGE', page, payload }),
//     onUnfollow: username => dispatch({
//         type: 'UNFOLLOW_USER',
//         payload: agent.Profile.unfollow(username)
//     }),
//     onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' })
// });
            

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export { Profile as Profile, mapStateToProps as mapStateToProps };