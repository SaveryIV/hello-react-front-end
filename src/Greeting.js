import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from './redux/actions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div>
      <h2>Greeting:</h2>
      <p>{greeting}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
