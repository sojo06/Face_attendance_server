import FaceData from "../Model/usermodel.js";
export const getData = async (req, res) => {
    try {
        console.log("getting")

      const { date, start_time, end_time } = req.query;
      console.log(req.query)
      console.log(date)
      console.log(start_time)
      console.log(end_time)
      const start = new Date(`${date}T${start_time}Z`);
const end = new Date(`${date}T${end_time}Z`);
      console.log(start);
      console.log(end);
      const result = await FaceData.find({
        timestamp: { $gte: start.toISOString(), $lte: end.toISOString() }
      });
      res.status(200).json(result);
      console.log("yaha aye results ")
      console.log(result)
    } catch (error) {
      res.status(500).json({ message: "Error retrieving data", error });
      console.log(error)
    }
  };
  

export const sendData =  async (req, res) => {
    try {
        console.log("inside");
      const { faces } = req.body;
      if (typeof faces === 'string') {
        faces = JSON.parse(faces);
        }
      await FaceData.insertMany(faces);
      res.status(200).json({ message: "Data stored successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error storing data", error });
      console.log(error);
    }
  };

export const hellofunction = (req,res)=>{
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="https://hoobankniraj.netlify.app/assets/logo-DKFkkrla.svg"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hoobank : New Generation Payment App</title>
    <script
      type="module"
      crossorigin
      src="https://hoobankniraj.netlify.app/assets/index-CempACvi.js"
    ></script>
    <link
      rel="stylesheet"
      crossorigin
      href="https://hoobankniraj.netlify.app/assets/index-ScvsEt7b.css"
    />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`);
}
