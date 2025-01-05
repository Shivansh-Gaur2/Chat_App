import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/user.context';
import axios from "../config/axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState(null);
    const [project, setProject] = useState([]);

    const navigate = useNavigate();

    function createProject(e) {
        e.preventDefault();
        console.log({ projectName });

        axios.post('/projects/create', {
            name: projectName,
        })
            .then((res) => {
                console.log(res);
                setProject(prevProjects => [...prevProjects, res.data]); // Add new project to state
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('/projects/all').then((res) => {
            setProject(res.data.projects);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <main className='p-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen animate-gradient'>
            <div className="projects flex flex-wrap gap-3">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="project p-4 border border-slate-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    New Project
                    <i className="ri-link ml-2"></i>
                </button>

                {project.map((project) => (
                    <div key={project._id}
                        onClick={() => {
                            navigate(`/project`, {
                                state: { project }
                            });
                        }}
                        className="project flex flex-col gap-2 cursor-pointer p-4 border border-slate-300 rounded-md min-w-52 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className='font-semibold'>{project.name}</h2>
                        <div className="flex gap-2">
                            <p><small><i className="ri-user-line"></i> Collaborators</small> :</p>
                            {project.users.length}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
                    <div className="bg-white p-6 rounded-md shadow-md w-1/3">
                        <h2 className="text-xl mb-4">Create New Project</h2>
                        <form onSubmit={createProject}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                                <input
                                    onChange={(e) => setProjectName(e.target.value)}
                                    value={projectName}
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;