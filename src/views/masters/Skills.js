import React, { Component } from 'react'
import { toast } from "react-toastify";
import Pagination from "../../components/Pagination";
import Loader from '../../components/Loader';
import MasterService1 from "../../services/masters/MasterService1";
const { getSkills } = MasterService1();
export default class Skills extends Component {
  state = { result: [], isLoading: false, offset: 0, limit: 10, count: 0, pages: [], selected: 0, search: null, };

  componentDidMount() {
    this.getSkillListData( this.state.offset, this.state.limit, this.state.search );
  }

  // get skill prgram list
  getSkillListData = async (offset, limit,search) => {
    this.setState({ isLoading: false });
      getSkills(offset, limit, search).then(async (res) => {
      let response = await res;
      if (response.data.status === 200) {
        let pages = [];
        for (let index = 1; index <= Math.ceil(response.data.count / limit); index++) {
          pages.push(index);
        }
        this.setState({ isLoading: true, result: response.data.result, count: response.data.count, pages: pages, });
      } else {
        toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT, });
        this.setState({ isLoading: false });
      }
    });
  };

  changePage = (offset) => {
    this.setState({ selected: offset });
    this.getSkillListData( offset * this.state.limit, this.state.limit, this.state.search );
  };

  // search filter
  searchFilter = () => {
      this.getSkillListData(0, 10, this.state.search);
  }

  // reset filter
  resetFilter = () => {
      this.setState({...this.state,search:null});
      this.getSkillListData( this.state.selected, this.state.limit, null );
      document.getElementById("serachinp").value = null;
  }

  render() {
    return (
      <>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-10">
                <input type="text" className="form-control" placeholder="Search Here..." name="search" onChange={(e) => this.setState({ ...this.state, search: e.target.value }) } id="serachinp" />
                <br />
                <button type="button" className="btn btn-primary" onClick={this.searchFilter} > Search </button>
                &nbsp;&nbsp;
                <button type="button" className="btn btn-danger" onClick={this.resetFilter} > Reset </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Manage Skills</h4>
              <div className="card-description">
                <div className="col-sm-4 pull-left"> Total Records:<code>{this.state.count}</code> </div>
                <div className="col-sm-12 paginate-right"> <Pagination pages={this.state.pages} selected={this.state.selected} changePage={this.changePage} /> </div>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>Sector</th>
                      <th>Skill</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!this.state.isLoading && ( <tr> <td colSpan="3" align="center"> <Loader /> </td> </tr> )}
                    {this.state.result.map((row, index) => {
                      return (
                        <tr key={index}>
                          <td> {this.state.limit * this.state.selected + (index + 1)} </td>
                          <td>{row.sector && row.sector.sector_name}</td>
                          <td>{row.skill}</td>
                          <td> {row.status === "1" ? (<span className="text text-success">Active</span>) : (<span className="text text-danger">Inactive</span>)} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
