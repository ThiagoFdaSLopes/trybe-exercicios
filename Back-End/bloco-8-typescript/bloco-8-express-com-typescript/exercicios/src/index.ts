
import app from './app';

app.listen(process.env.PORT, async () => {
  console.log(`Ouvindo fofocas na porta ${process.env.PORT}`);
});