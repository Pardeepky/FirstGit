class student{
    static count=0
    constructor(name,age,phone,marks)
    {
        this.name=name
        this.age=age
        this.phone=phone
        this.marks=marks
    student.countStudent()
    }
    static countStudent(){
        return(student.count++)
    }
  eligible(minage)
  {
    return (minmarks)=>{
    if(this.marks>=40 && this.age>=25)
    {
        console.log(`${this.name} is eligible`);
    }
    // else
    // {
    //     console.log(`${this.name} is not eligible`);
    // }
  }
  }
  }
  
  const obj1=new student("Ravi",20,12345678,55)
  const obj2=new student("Abhi",19,12345678,33)
  const obj3=new student("Rahul",23,12345678,72)
  const obj4=new student("Raj",18,12345678,40)
  const obj5=new student("Ram",25,12345678,39)
  obj1.eligible(25)(40)
  obj2.eligible(25)(40)
  obj3.eligible(25)(40)
  obj4.eligible(25)(40)
  obj5.eligible(25)(40)