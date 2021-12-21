import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ButtonSpinner } from "../../components/ButtonSpinner";
import {
  getCurrentUserAsync,
  userLoginAsync,
} from "../../features/auths/slice/thunk";
import { signInSchema } from "../../validate";
import card from "../../images/card.png";
import "./style.scss";

interface PayInProps {}

export const PayIn = (props: PayInProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const submit = async (data: any, e: any) => {
    e.preventDefault();
    const result: any = await dispatch(userLoginAsync(data));
    if (result.payload.statusCode === 200) {
      if (result.payload.data.role === 0) {
        dispatch(getCurrentUserAsync());
        history.push("/");
        // window.open(`http://localhost:4000?token=${result.payload.data.token}`);
      } else if (result.payload.data.role === 1) {
        dispatch(getCurrentUserAsync());
        history.push("/analytics");
      } else if (result.payload.data.role === 2) {
        dispatch(getCurrentUserAsync());
        history.push("/order");
      }
    }
  };

  return (
    <div className="payInPage container">
      <div className="payInPage-form">
        <div className="payInPage-form-img">
          <img
            src="https://i.imgur.com/1FosXYH.png"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="payInPage-form-content"
        >
          <p>Nạp tiền vào tài khoản</p>
          <br />
          <input
            type="text"
            {...register("idcard")}
            id="idcard"
            className="form-control"
            placeholder="Mã số thẻ"
          />
          <p className="text-danger">{errors.idcard?.message}</p>
          <input
            type="date"
            id="lastdate"
            {...register("lastdate")}
            className="form-control"
            placeholder="Ngày hết hạn"
          />
          <p className="text-danger">{errors.lastdate?.message}</p>
          <input
            type="money"
            id="money"
            {...register("money")}
            className="form-control"
            placeholder="Số tiền"
          />
          <p className="text-danger">{errors.money?.message}</p>
          <input
            type="text"
            id="CVV"
            {...register("CVV")}
            className="form-control"
            placeholder="CVV/CVC2"
          />
          <p className="text-danger">{errors.CVV?.message}</p>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="form-control"
            placeholder="Mật khẩu"
          />
          <p className="text-danger">{errors.password?.message}</p>
          <p>Loại thẻ</p>
          <div className="radio">
          <input type="radio" value={1} name="group-radio" />
          <label className="radio"> Credit Card</label>
          <br></br>
          <input type="radio" value={2} name="group-radio" />
          <label className="radio"> Debit Card</label>
          </div>
          <br />
          <button
            id="login"
            className="btn btn-block login-btn mb-4"
            type="submit"
            disabled={isSubmitting}
          >
            {!isSubmitting ? "Nạp tiền" : <ButtonSpinner />}
          </button>
          

        </form>
      </div>
    </div>
  );
};
