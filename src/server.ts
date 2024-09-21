import 'dotenv/config'
import { app } from './app';

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
