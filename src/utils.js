
export const formFields = {
  firstName: {
    key: "firstName",
    validation: {
      required: "Firstname is required",
    },
  },
  lastName: {
    key: "lastName",
    validation: {
      required: "Lastname is required",
    },
  },
  email: {
    key: "email",
    validation: {
      required: "Email is required",
    },
  },
  phone1: {
    key: "phone1",
    validation: {
      required: "phone number is required",
      minLength: {
        value: 3,
        message: "maximum length is 3",
      },
      maxLength: {
        value: 3,
        message: "Phone number is invalid",
      },
    },
  },
  phone2: {
    key: "phone2",
    validation: {
      required: "phone number is required",
      minLength: {
        value: 4,
        message: "Phone number is invalid",
      },
      maxLength: {
        value: 4,
        message: "maximum length is 4",
      },
    },
  },
  phone3: {
    key: "phone3",
    validation: {
      required: "phone number is required",
      minLength: {
        value: 3,
        message: "Phone number is invalid",
      },
      maxLength: {
        value: 3,
        message: "maximum length is 3",
      },
    },
  },
  address1: {
    key: "address1",
    validation: {
      required: "Address line is required",
    },
  },
  address2: {
    key: "address2",
    validation: {
      required: "Address line is required",
    },
  },
  city: {
    key: "city",
    validation: {
      required: "City is required",
    },
  },
  state: {
    key: "state",
    validation: {
      required: "State is required",
    },
  },
  zipCode: {
    key: "zipCode",
    validation: {
      required: "ZipCode is required",
    },
  },
  country: {
    key: "country",
    validation: {
      required: "Country is required",
    },
  },
  qualification: {
    key: "qualification",
    validation: {
      required: "Qualification is required",
    },
  },
  comments: {
    key: "comments",
    validation: {
      required: "Comment is required",
    },
  },
};