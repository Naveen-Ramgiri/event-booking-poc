import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../CreateEvents/CreateEvent.css';
import { useForm } from "react-hook-form";
const options = ["Bride", "Groom", "Partner"];
const options1 = ["Bride", "Groom", "Partner"];

function EditEvent({ profile, setProfile }) {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(options[0]);
  const [selected1, setSelected1] = useState(options1[0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();


  return (
    <div className='editevent'>
      <div className='container'>
        <div className='text-center'>
          <h4>
            {profile && profile._delegate.displayName}'s Wedding <span>8 Dec 2022</span>
            <span>
              <input class="toggle-box" id="toggleId-1" type="checkbox" />
              <label for="toggleId-1"></label>
              <div class="toggle-box-content">
                <h5 className=''>Please provide required info below to continue.</h5>
                <form>
                  <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                      <div className="form-group odd">
                        <input
                          type="text"
                          placeholder='Event Date*'
                          className={`form-control ${errors.name && "invalid"}`}
                          {...register("fname", { required: "There is an error that relates to this field" })}
                          onKeyUp={() => {
                            trigger("fname");
                          }}
                        />
                        {errors.fname && (
                          <small className="text-danger">{errors.fname.message}</small>
                        )}
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6">
                      <div className='form-group even'>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                          placeholder="Event Name"
                          {...register("cardNumber", {
                            required: "Please enter cardnumber"
                          })}
                          onKeyUp={() => {
                            trigger("cardNumber");
                          }}
                        />
                        {errors.cardNumber && (
                          <small className="text-danger">{errors.cardNumber.message}</small>
                        )}
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                      <div className="form-group odd">
                        <select
                          value={selected}
                          onChange={e => setSelected(e.target.value)}>
                          {options.map((value) => (
                            <option value={value} key={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6">
                      <div className='form-group even'>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                          placeholder="My Phone"
                          {...register("cardNumber", {
                            required: "Please enter cardnumber"
                          })}
                          onKeyUp={() => {
                            trigger("cardNumber");
                          }}
                        />
                        {errors.cardNumber && (
                          <small className="text-danger">{errors.cardNumber.message}</small>
                        )}
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                      <div className="form-group odd">
                        <input
                          type="text"
                          placeholder="Partner's Full Name"
                          className={`form-control ${errors.name && "invalid"}`}
                          {...register("fname", { required: "There is an error that relates to this field" })}
                          onKeyUp={() => {
                            trigger("fname");
                          }}
                        />
                        {errors.fname && (
                          <small className="text-danger">{errors.fname.message}</small>
                        )}
                      </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6">
                      <div className='form-group even'>
                        <select
                          value={selected}
                          onChange={e => setSelected1(e.target.value)}>
                          {options1.map((value) => (
                            <option value={value} key={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='checkout-buttons'>
                    <button>SAVE</button>
                  </div>
                </form>
                <hr />
              </div>
            </span>
          </h4>

          <p>You’ll need to assign your look before checking out.</p>
          <button>NEXT: ASSIGN LOOK</button>
        </div>
      </div>
    </div>
  )
}

export default EditEvent;