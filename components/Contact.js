var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },

render: function() {
    return (
      <div className= {'contactItem'}>
        <img className= {'contactImage'} src= {'https://image.flaticon.com/icons/svg/876/876604.svg'}/>
            <p className= {'contactLabel'}>
              {this.props.item.firstName} 
             </p>
            <p className= {'contactLabel'}> 
              {this.props.item.lastName} 
            </p>
            <a className= {'contactEmail'} href= {'mailto:' + this.props.item.email}>
              {this.props.item.email} 
            </a>
      </div> 
      );
  }
});