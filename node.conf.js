require('dotenv').config();
//dotenv-webpack wraps dotenv and Webpack.DefinePlugin. 
//As such, it does a text replace in the resulting bundle for any instances of process.env.
module.exports = {
  env: {
    MAIN_URL = process.env.MAIN_URL
  }
};

module.exports = {
  env: {
    COVALENTHQ = process.env.COVALENTHQ 
  }
}
