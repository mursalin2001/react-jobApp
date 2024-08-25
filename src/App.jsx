import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, {JobLoader} from "./components/JobPage";
import AddJob from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";



const App = () => {
  //add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
       method:'POST',
       headers: {
                'Content-Type':'application/json',
              },
              body: JSON.stringify(newJob),
            });
  
    console.log(newJob);
    return;
  }


  // delete job 

  const deleteJob  = async (id) =>
  {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  //update job

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method:'PUT',
      headers: {
               'Content-Type':'application/json',
             },
             body: JSON.stringify(job),
           });
 
   console.log(job);
   return;
  }

  
  const router = createBrowserRouter(createRoutesFromElements(
  
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader = {JobLoader} />
      <Route path='/add-job' element={<AddJob addJobSubmit ={addJob} /> }/>
      <Route path='/edit-job/:id' element={<EditJobPage updatedJobSubmit={updateJob} />}  loader= {JobLoader} />
  
      <Route path='*' element={<NotFound />} />
  
  
    </Route>
  ));

  return (

    <RouterProvider router={router} />

  )
}

export default App
