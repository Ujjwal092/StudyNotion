const Profile = require("../models/Profile");
const User = require("../models/User");
const Course = require("../models/Course");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.updateProfile = async (req, res) => {
  try {
    const { dateOfBirth, about, contactNumber, gender } = req.body;
    const userId = req.user.id;

    if (!contactNumber) {
      return res.status(400).json({
        success: false,
        message: "Contact number is required",
      });
    }

    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const profileId = userDetails.additionalDetails;

    const profileDetails = await Profile.findById(profileId);

    profileDetails.gender = gender ?? profileDetails.gender;
    profileDetails.dateOfBirth = dateOfBirth ?? profileDetails.dateOfBirth;
    profileDetails.about = about ?? profileDetails.about;
    profileDetails.contactNumber = contactNumber;

    await profileDetails.save();

    const updatedUserDetails =
      await User.findById(userId).populate("additionalDetails");

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log("Update Profile Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating profile",
    });
  }
};
// DELETE ACCOUNT

exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;

    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Unenroll user from all courses
    for (const courseId of userDetails.courses) {
      await Course.findByIdAndUpdate(courseId, {
        $pull: { studentsEnrolled: userId },
      });
    }

    // Delete profile
    await Profile.findByIdAndDelete(userDetails.additionalDetails);

    // Delete user
    await User.findByIdAndDelete(userId);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log("Delete Account Error:", error);

    return res.status(500).json({
      success: false,
      message: "User cannot be deleted",
    });
  }
};

// GET USER DETAILS

exports.getAllUserDetails = async (req, res) => {
  try {
    const userId = req.user.id;

    const userDetails = await User.findById(userId)
      .populate("additionalDetails")
      .populate({
        path: "courses",
        populate: {
          path: "instructor",
          select: "firstName lastName email",
        },
      })
      .exec();

    return res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      data: userDetails,
    });
  } catch (error) {
    console.log("Fetch User Error:", error);

    return res.status(500).json({
      success: false,
      message: "Cannot fetch user data",
    });
  }
};

// UPDATE DISPLAY PICTURE

exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture;
    console.log("FILES:", req.files);
    const userId = req.user.id;

    if (!displayPicture) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000,
    );

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { image: image.secure_url },
      { new: true },
    );

    return res.status(200).json({
      success: true,
      message: "Profile picture updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log("Image Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error while uploading image",
    });
  }
};

// GET ENROLLED COURSES

exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;

    const userDetails = await User.findById(userId)
      .populate({
        path: "courses",
        populate: {
          path: "instructor",
          select: "firstName lastName email image",
        },
      })
      .exec();

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    });
  } catch (error) {
    console.log("Fetch Enrolled Courses Error:", error);

    return res.status(500).json({
      success: false,
      message: "Cannot fetch enrolled courses",
    });
  }
};
