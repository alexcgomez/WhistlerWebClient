import User from '../entities/User';
import React from 'react';
import autobind from 'autobind-decorator';
import { RootState } from '../reducers/RootReducer';
import { getUser, GetUserAction } from '../actions/user/GetUser.action';
import { connect } from 'react-redux';

interface StateProps {
  user?: User;
}

interface DispatchProps {
  getUser(id: string): Promise<GetUserAction>;
}

interface Props extends StateProps, DispatchProps {

}

@autobind
class LoginContainer extends React.Component<Props, {}> {

  public componentDidMount(): void {
    this.props.getUser("3");
  }

  public render(): React.ReactNode {
    return (
      <div/>
    );
  }

}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.getUser.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUser: (id:string)=>dispatch(getUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
