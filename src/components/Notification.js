
import React from 'react'
import { connect } from 'react-redux';
import { notifyUser } from '../reducers/notificationReducer';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  setTimeout(() => {
    props.notifyUser('');
  },5000);
    
  return (
    <>
    {
      props.notification ?<div style={style}>{props.notification}</div>: ''
    }
  </>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.message
  }
};

const mapDispatchToProps = {
  notifyUser
};
                            
export default connect(mapStateToProps, mapDispatchToProps)(Notification)