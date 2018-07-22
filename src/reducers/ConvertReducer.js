const INITIAL_STATE = {
  jsChunk: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'textarea_changed':
    
      var jsChunk = action.payload;
      
      //Capitalize css property name
      jsChunk = jsChunk.replace(/.+?(?=:)/g,
        function (m, $1, $2) {
          return m.replace(/([-])([a-z])/g,
            function (s, $3, $4) {
              return $4.toUpperCase();
            })
        }
      );
      
      //attribute value wrapping
      jsChunk = jsChunk.replace(/([:]\s+)/g, ": '");
      jsChunk = jsChunk.replace(/([;])/g, "',");
      
      //replacing all new line symbols with <br>
      jsChunk = jsChunk.replace(/(?:\r\n|\r|\n)/g, '<br>&nbsp;&nbsp;&nbsp;');
      
      return {...state, jsChunk }
    default: 
      return state;
  }
};