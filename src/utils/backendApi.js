import axios from "axios";

const createData = (user) => {
  const registrationDate = new Date(user?.registered?.date);
  return {
    id: user?.login?.uuid,
    user: {
      fullName: `${user?.name?.first} ${user?.name?.last}`,
      address: `${user?.location?.street?.number} ${user?.location?.street?.name}. ${user?.location?.state}, ${user?.location?.country} ${user?.location?.postcode}`,
      userImage: user?.picture?.medium,
    },
    contactInfo: {
      email: user?.email,
      phone: user?.phone,
    },
    refistrationDate: {
      registrationDate: registrationDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      registrationTime: registrationDate.toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
    },
    address: {
      country: user?.location?.country,
      postcode: user?.location?.postcode,
    },
  };
};

export const getUsersHandler = (
  callback,
  pageNumber,
  numberOfUsers,
  nationality,
  gender
) => {
  const params =
    pageNumber || numberOfUsers || nationality || gender
      ? {
          results: numberOfUsers,
          page: pageNumber,
          gender: gender,
          nat: nationality,
        }
      : {};
  const users = [];
  axios
    .get("https://randomuser.me/api", {
      params,
    })
    .then(({ data }) => {
      data?.results.map((user) => users.push(createData(user)));
      console.log(users.length);
      callback(users);
    })
    .catch((err) => {
      console.log(err);
    });
};
