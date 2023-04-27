const express = require('express');
const route = express.Router();
const Student = require('../models/student');
const Program = require('../models/program');

/**
 * @description GET route
 * @method GET
 */

route.get('/dashboard/student', async (req, res)=>{
// To fetch students by their ID
    if(req.query.id){
        const id = req.query.id;
        await Student.findById(id).then(data=>{
            
                if(!data){
                    res.status(404).send({message:"Student not found"})
                }else{
                    res.send(data);

                }
        })
        .catch(err =>{
            res.status(500).send({message: "Error retreving student by ID"})
        })
    }else{
        // To fetch all students
        Student.find().then(student=>{
            res.render('student', {title: 'Students', student: student});
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error -- All student data"});
        })
        
    }
})

route.get('/dashboard/program', async (req, res)=>{

    // To fetch program by its ID
    if(req.query.id){
        const id = req.query.id;
        await Program.findById(id).then(data=>{
            
                if(!data){
                    res.status(404).send({message:"Program not found"})
                }else{
                    res.send(data);

                }
        })
        .catch(err =>{
            res.status(500).send({message: "Error retreving program by ID"})
        })
    }else{

        // To fetch all program
        Program.find().then(program=>{
            res.render('program', {title: 'Program', program: program});
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error -- All program data"});
        })
        
    }
})




// create new student 
route.post('/add-student', async (req, res)=> {
    const student = new Student ({
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        studentid: req.body.studentid,
    });
    await student.save(student)
    .then(data=>{

        
        res.redirect('dashboard/student')
        console.log(student);
    })
    .catch(err=>{
        const error = err;
        console.log(error);
        res.status(500).send({
            message:err.message || "Error in creating"
        })
    })
})





// create new Program  

route.post('/add-program', async (req, res)=> {
    const program = new Program ({
        pname: req.body.pname,
        duration: req.body.duration,
        cost: req.body.cost,
        programid: req.body.programid,
    });
    await program.save(program)
    .then(data=>{
        // req.session.message={
        //     type: 'Success',
        //     message: 'Program created succcessfully'
        // };
        res.redirect('dashboard/program')
        console.log("Program",program);
    })
    .catch(err=>{
        const error = err;
        console.log(error);
        res.status(500).send({
            message:err.message || "Error in creating"
        })
    })
})

// Update routes

// Update a student by student ID
route.patch('/students/:studentid', async (req, res) => {
    try {
      const student = await Student.findOne({ studentid: req.params.studentidstudent });
      if (!student) {
        return res.sendStatus(404);
      }
      student.name = req.body.name;
      student.address = req.body.address;
      student.contact = req.body.contact;
      student.studentid = req.body.studentid;
      await student.save();
      res.send(student);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  route.patch('/program/:studentid', async (req, res) => {
    try {
      const program = await Program.findOne({ programid: req.params.programid });
      if (!program) {
        return res.sendStatus(404);
      }
      program.pname = req.body.pname;
      program.address = req.body.address;
      program.contact = req.body.contact;
      program.programid = req.body.programid;
      await program.save();
      res.send(program);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });



// Delete Routes 

route.post('/delete-student/:id', (req, res)=>{
    const id = req.params.id;
    Student.findByIdAndDelete(id).then(student=>{
        res.redirect('/dashboard/student');
    })

})
route.post('/delete-program/:id', (req, res)=>{
    const id = req.params.id;
    Program.findByIdAndDelete(id).then(program=>{
        res.redirect('/dashboard/program');
    })

})


route.get('/createstudent', (req, res) =>{
    res.render('createStudent', {title: 'Create Student'} )
})
route.get('/createprogram', (req, res) =>{
    res.render('createProgram', {title: 'Create Program'} )
})
route.get('/register', (req, res) =>{
    res.render('registration', {title: 'Registered'} )
})


// Register student for a program
route.post('/register-program', async (req, res) => {
    const studentId = req.body.studentId; 
    const programId = req.body.programId;

    try {
        
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        
        const program = await Program.findById(programId);
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        
        student.registeredPrograms.push(program);
        await student.save();

       
        program.registeredStudents.push(student);
        await program.save();

        res.status(200).json({ message: 'Registration Successfull' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while registering' });
    }
});






module.exports = route;  