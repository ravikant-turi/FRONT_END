import { useNavigate, useParams } from "react-router-dom";
import { retrieveTodoApi } from "../apies/TodoApiService";
import { useEffect } from "react";
import { useAuth } from "../security/AuthContext";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { updateTodoApi} from '../apies/TodoApiService'

export default function TodoUpdateComponent() {
  const { id } = useParams();

  const authContext = useAuth();

  const username = authContext.username;

  const [description, setDescription] = useState("");

  const [targetDate, setTragetDate] = useState("");

  const navigate=useNavigate();

  useEffect(() => retrievveTodo(), [id]);
  function retrievveTodo() {
    retrieveTodoApi(username, id)
      .then((responce) => {
        setDescription(responce.data.description),
        setTragetDate(responce.data.targetDate);
      })
      .then((error) => console.log(error));

    //   .finally(console.log("clean up update page"));
  }

  function onSubmit(values) {
    // console.log(values);
   
    const todo={
       id:id,
       username:"jhhkg",
       description:description,
       targetDate:targetDate,
       done:false
    }
    console.log("todo  :"+todo);
    updateTodoApi(username,id,todo)
    .then((responce) => {
     console.log(responce)
     navigate('/todos')
    })
    .then((error) => console.log(error));
  }
  function validate(values) {
    let error = {
      // description:'enter a valid description',
      // targetDate:'enter a valid  target date'
    };

    if (values.description.length < 5) {
      error.description = "Enter atleast 5 Charecter";
    }
    if (values.targetDate == null) {
      error.targetDate = "Enter target date";
    }
    console.log(values);
    return error;
  }
  return (
    <>
      <div className="container">
        <h1>Enter Todo Details</h1>
        
        <div>
          <Formik
            initialValues={{ description, targetDate }}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label> Description</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="description"
                  ></Field>
                </fieldset>
                <fieldset className="form-group">
                  <label>TargetDate</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="targetDate"
                  ></Field>
                </fieldset>
                <div>
                  <button className="btn btn-primary m-3" type="submit">Save</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
