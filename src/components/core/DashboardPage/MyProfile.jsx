import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RiEditBoxLine } from "react-icons/ri";
import IconBtn from "../../comman/IconBtn";
import { formattedDate } from "../../../utils/dateFormater";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(user);

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-100">
        My profile
      </h1>

      {/* section 1 */}
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className=" aspect-square w-[78px] rounded-full object-cover"
          />
          <div className=" space-y-1">
            <p className="text-lg font-semibold text-richblack-100">
              {user.firstName + " " + user.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user.email}</p>
          </div>
        </div>
        <IconBtn
          text={"Edit"}
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* section2 */}
      
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-100">About</p>
          <IconBtn
            text={"Edit"}
            onclick={() => navigate("/dashboard/settings")}
          >
             <RiEditBoxLine />
          </IconBtn>
        </div>

        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-100"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Somethin about Yourself"}
        </p>
      </div>

      {/* section 3 */}
     
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-100">
          Personal Details</p>
          <IconBtn
            text={"Edit"}
            onclick={() => navigate("/dashboard/settings")}
          >
              <RiEditBoxLine />
          </IconBtn>
        </div>

        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-300">First Name</p>
              <p className="text-sm font-medium text-richblack-100">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Email</p>
              <p className="text-sm font-medium text-richblack-100">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Gender</p>
              <p className="text-sm font-medium text-richblack-100">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-300">Last Name</p>
              <p className="text-sm font-medium text-richblack-100">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Phone Number</p>
              <p className="text-sm font-medium text-richblack-100">
                {user?.additionalDetails?.contact ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-100">
                {formattedDate(user?.additionalDetails?.DOB) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}