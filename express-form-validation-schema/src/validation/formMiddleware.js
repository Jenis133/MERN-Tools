const formValidation = (validation) => {
  return (req,res,next) => {
    let data = validation.validate(req.body);
    let error = data.error;
    if (error) {
      res.json({
        success: false,
        message: {"Error type": error.details[0].message},
      })
    }
    else {
      next();
    };
  };
};

export default formValidation;