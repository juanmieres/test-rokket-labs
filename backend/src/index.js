const app = require('./app');
const port = 5000;

require('./database')

app.listen(port, () => console.log(`Server running on port ${port}`))