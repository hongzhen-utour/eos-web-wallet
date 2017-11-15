import configureMockStore from "redux-mock-store";
import { push } from "react-router-redux";
import middlewares from "middleware";
import { tryPostSignup } from "redux-modules/signup/actions";
import { succeedPostLogin } from "redux-modules/login/actions";
import { unsetNotification } from "redux-modules/notifications/actions";
import { doSignUp } from "thunks/signup";

const mockStore = configureMockStore(middlewares);

describe("doSignUp", () => {
  it("on whole signup POST success, dispatch succeedPostLogin", async () => {
    const store = mockStore({
      login: {
        isAuthenticated: false,
        user: {
          email: ""
        }
      }
    });

    const email = "test@eafe.com";
    const password = "xyz20171424";

    const profile = {
      email
    };

    fetch.mockResponse(JSON.stringify(profile), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });

    const expectedActions = [
      tryPostSignup(email, password),
      unsetNotification(),
      succeedPostLogin(profile),
      push("/")
    ];

    await store.dispatch(doSignUp(email, password));

    expect(store.getActions()).toEqual(expectedActions);
  });
});