var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className= {'contactForm'}>
          <img className= {'contactFormImage'} src= {'https://image.flaticon.com/icons/svg/876/876626.svg'}/>
          <input type= 'text' placeholder= 'Imię' value= {this.props.contact.firstName}/>
          <input type= 'text' placeholder= 'Nazwisko' value= {this.props.contact.lastName}/>
          <input type= 'email' placeholder= 'Email' value= {this.props.contact.email}/>
          <button type= 'submit'> 
          Dodaj kontakt
          </button>
        </form>
      );
    }
  });