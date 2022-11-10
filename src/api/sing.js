import { contractInstance, web3 } from "./network";

export const login = (login, address, password) => {
  return contractInstance.methods
    .vhod(login,address, web3.utils.keccak256(password))
    .call({
      from: address,
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const registration = (address, name, login, password) => {
  return contractInstance.methods
    .registration(address, name, login, web3.utils.keccak256(password))
    .send({
      from: address,
    })
    .catch(function (error) {
      console.log(error);
    });
};