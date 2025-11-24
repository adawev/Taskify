import './style.scss'
import avatar1 from '../../../images/avatar1.png'
import avatar2 from '../../../images/avatar2.png'
import avatar3 from '../../../images/avatar3.png'
import avatar4 from '../../../images/avatar4.png'
import avatar5 from '../../../images/avatar5.png'
import avatar6 from '../../../images/avatar6.png'
import bgCircle from '../../../images/bgCircle.png'


function Solutions() {
    return <div className="SolutionsLandingPage">
        <img src={bgCircle} alt="" className={"bgCircleBottom"}/>

        {/* Main texts */}
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="main__texts">
                        <h1 className="main__text1 text-uppercase text-primary fw-black">
                            How we give a solution...
                        </h1>
                        <h1 className="main__text2 text-uppercase fw-black">
                            Meet your unique needs
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        {/* /Main textsa */}

        {/* Solution cards */}
        <div className="container py-5 solutions_card">

            <div className="card__items">

                <div className="row">
                    <div className="col-4">
                        {/* Card 1 */}
                        <div className="card__item card__item1">
                            <div className="card__image">
                                <img src={avatar1} alt="1 avatar" className="solution-avatar img-fluid img-sm"/>
                            </div>
                            <h3 className="card__title">
                                Create Tasks Effortlessly
                            </h3>
                            <p className="card__description">
                                Add new tasks in seconds with clear details like deadlines,
                                priorities, and attachments — stay organized from the start.
                            </p>
                        </div>
                        {/* /Card 1 */}
                    </div>

                    <div className="col-4">
                        {/* Card 2 */}
                        <div className="card__item card__item2">
                            <div className="card__image">
                                <img src={avatar2} alt="2 avatar" className="solution-avatar img-fluid img-sm"/></div>
                            <h3 className="card__title">
                                View and Track Your Work
                            </h3>
                            <p className="card__description">
                                Keep an eye on everything you’ve created with a clear,
                                structured overview. Our task table shows you each task’s name,
                                description, deadline, and status — all in one place. Whether you’re tracking daily
                                goals or long-term projects, the system lets you monitor
                                progress and priorities without missing a single detail.
                            </p>
                        </div>
                        {/* /Card 2 */}
                    </div>

                    <div className="col-4">
                        {/* Card 3 */}
                        <div className="card__item card__item3">
                            <div className="card__image">
                                <img src={avatar3} alt="3 avatar" className="solution-avatar img-fluid img-sm"/></div>
                            <h3 className="card__title">
                                Edit and Improve Flexibly
                            </h3>
                            <p className="card__description">
                                Tasks evolve, and so should your control. With our flexible update
                                feature, you can easily modify any task’s details — change its status from “Pending”
                                to “Completed”, adjust deadlines, or update descriptions.
                                This allows you to adapt o
                                new priorities instantly,
                                keeping your workflow accurate and always up to date.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row">

                    <div className="col-3">
                        {/* Card 4 */}
                        <div className="card__item card__item4">
                            <div className="card__image">
                                <img src={avatar4} alt="4 avatar" className="solution-avatar img-fluid img-sm"/></div>
                            <h3 className="card__title">
                                Clean Up and Stay Focused
                            </h3>
                            <p className="card__description">
                                Sometimes clearing your list is as important as completing it.
                                Our delete function helps you remove finished or unnecessary tasks effortlessly,
                                keeping your workspace organized and distraction-free.
                                Manage your focus by keeping only what
                                matters most, so every click brings you closer to real progress.
                            </p>
                        </div>
                        {/* /Card 4 */}
                    </div>

                    <div className="col-3">
                        {/* Card 5 */}
                        <div className="card__item card__item5">
                            <div className="card__image">
                                <img src={avatar5} alt="5 avatar" className="solution-avatar img-fluid img-sm"/></div>
                            <h3 className="card__title">
                                Smarter Task Control
                            </h3>
                            <p className="card__description">
                                Our CRUD-based system ensures your data stays organized,
                                consistent, and easy to manage — just like your workflow.
                            </p>
                        </div>
                        {/* /Card 5 */}
                    </div>

                    <div className="col-3">
                        {/* Card 6 */}
                        <div className="card__item card__item6">
                            <div className="card__image">
                                <img src={avatar6} alt="6 avatar" className="solution-avatar img-fluid img-sm"/></div>
                            <h3 className="card__title">
                                Simple, Intuitive, Powerful
                            </h3>
                            <p className="card__description ">
                                Every action — create, read, update, delete — happens smoothly, giving
                                you total control without complexity.
                            </p>
                        </div>
                        {/* /Card 6 */}
                    </div>
                </div>
            </div>
        </div>

        {/* /Solution cards */}
    </div>
}

export default Solutions;