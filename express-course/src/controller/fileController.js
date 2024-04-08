export let uploadSingleFile = (req, res, next) => {
    console.log(req.file);
    let link = `http://localhost:8000/${req.file.filename}`; // single file
      res.status(201).json({
        success: true,
        message: "File uploaded successfully",
        result: link,
      });
};

export let uploadMultipleFile = (req, res, next) => {
    console.log(req.files);
    let links = req.files.map((item) => {
      return `http://localhost:8000/${item.filename}`; // multiple file
    });
      res.status(201).json({
        success: true,
        message: "File uploaded successfully",
        result: links,
      });
};


