import React from "react";

import HeadlessCard from "../Headless/Card/HeadlessCard";
import { InputGroup } from "../Headless/Input/Input";
import { Modal } from "../Headless/Modal/Modal";
import { data, options } from "../Analytical-Component/dummy_data"
import HeadlessChart from "../Headless/Chart/HeadlessChart";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart, CategoryScale } from 'chart.js/auto';
import { UserDefinedDropdown } from "../Headless/Dropdown/Dropdown";
import { Table } from "../Headless/Table/Table";
import { data_lvlThree, options_lvlThree } from "../Analytical-Component/dummy_data_lvlThree"
import TimeInput from "./child_component/TimeInput"
import { dataDonorRegistration, optionsDonorRegistration } from "./dummy_dataDonorRegistration"
import ModalStyle from "../presentation/ModalStyle";
import CardStyle from "../presentation/CardStyle";
const Analytical = () => {
    Chart.register(CategoryScale);
    const { defaultButtonLabel,
        defaultButtonClass,
        defaultModalClass,
        defaultPanelClass,
        defaultTitleClass } = ModalStyle()

    const { styleClass, titleClass } = CardStyle()
    // const { totalProject, fetchTotalProjectNum, setTotalProject } = useGetNumericalAnalytic(getTotalProject)
    // const { totalDonation, fetchTotalDonation, setTotalDonation } = useGetNumericalAnalytic(getTotalDonation)
    return (
        <>
            <div className="container mx-auto">
                <div className="flex">
                    <div className="flex-auto">
                        <div className="
                grid
                sm:grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-3 xl:grid-cols-3
                mx-auto p-4
                gap-80
            ">
                            <HeadlessCard
                                styleClass={styleClass}
                                titleClass={titleClass}

                                header="Total projects count by"
                                body={
                                    <Table columns={[
                                        { label: 'Category', key: 'category' },
                                        { label: 'Donation count', key: 'count' },
                                    ]}
                                        data={[
                                            { category: 'Alice', count: 25 },
                                            { category: 'Bob', count: 30 },
                                            { category: 'Charlie', count: 20 }
                                        ]} />
                                }

                                interact={
                                    <UserDefinedDropdown
                                        choice={[{ label: 'Category', value: '1' },
                                        { label: 'Continent', value: '2' },
                                        { label: 'Country', value: '3' }]} />}
                                width="w-80"

                                bodyStyle={{
                                    fontSize: '30px',
                                    padding: '6%',
                                    fontWeight: 'bold'
                                }}
                            />

                            <HeadlessCard
                                styleClass={styleClass}
                                titleClass={titleClass}

                                header="Total donation count by "
                                body={
                                    <Table columns={[
                                        { label: 'Category', key: 'category' },
                                        { label: 'Donation count', key: 'count' },
                                    ]}
                                        data={[
                                            { category: 'Alice', count: 25 },
                                            { category: 'Bob', count: 30 },
                                            { category: 'Charlie', count: 20 }
                                        ]} />
                                }
                                interact={
                                    <UserDefinedDropdown
                                        choice={[{ label: 'Category', value: '1' },
                                        { label: 'Continent', value: '2' },
                                        { label: 'Country', value: '3' }]} />}
                                width="w-80"

                                bodyStyle={{
                                    fontSize: '30px',
                                    padding: '6%',
                                    fontWeight: 'bold'
                                }}
                            />



                        </div>

                        <div className="
                                grid
                                sm:grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 xl:grid-cols-3
                                mx-auto p-4
                                gap-80
                             ">
                            <HeadlessCard
                                styleClass={styleClass}
                                titleClass={titleClass}

                                header="Total projects and donation count of a donor"
                                interact={<Modal modalTitle="Total projects and donation count of a donor"
                                    modalContent={
                                        <InputGroup
                                            label="Donor ID"
                                            name="Donor ID"
                                            type="text"
                                            placeholder="Enter the ID of the interested Donor here"
                                            required={true} />} />}
                                body={


                                    <Table columns={[
                                        { label: 'Total Project', key: 'sumProject' },
                                        { label: 'Donation count', key: 'countDonation' },
                                    ]}
                                        data={[
                                            { sumProject: 12, countDonation: 25 },
                                        ]} />
                                }
                                width="w-80"

                            />

                            <HeadlessCard
                                styleClass={styleClass}
                                titleClass={titleClass}

                                header="Total projects and donation count of a charity"
                                interact={<Modal modalTitle="Total projects and donation count of a charity"
                                    modalContent={
                                        <InputGroup
                                            label="Charity ID"
                                            name="Charity ID"
                                            type="text"
                                            placeholder="Enter the ID of the interested Charity here"
                                            required={true} />} />}
                                body={


                                    <Table columns={[
                                        { label: 'Total Project', key: 'sumProject' },
                                        { label: 'Donation raised', key: 'raisedDonation' },
                                    ]}
                                        data={[
                                            { sumProject: 12, raisedDonation: 25 },
                                        ]} />
                                }
                                width="w-80"

                            />


                        </div>

                        <div className="mt-8">
                            <HeadlessCard
                                styleClass={styleClass}
                                titleClass={titleClass}

                                header="Donation value and projects by "
                                interact={
                                    <><UserDefinedDropdown
                                        choice={[{ label: 'Category', value: '1' },
                                        { label: 'Continent', value: '2' },
                                        { label: 'Country', value: '3' }]} />
                                        {" and "}
                                        <UserDefinedDropdown
                                            choice={[{ label: 'Category', value: '1' },
                                            { label: 'Continent', value: '2' },
                                            { label: 'Country', value: '3' }]} />
                                    </>}
                                body={
                                    <HeadlessChart data={data} options={options}>
                                        {({ chartData, chartOptions }) => (
                                            <Bar datasetIdKey='id' data={chartData} />
                                        )}
                                    </HeadlessChart>
                                }
                                width="w-11/12"
                                bodyStyle={{
                                    fontSize: '30px',
                                    padding: '6%',
                                    fontWeight: 'bold'
                                }}
                            />
                        </div>

                    </div>

                    <div className="mt-4">

                        <HeadlessCard
                            styleClass={styleClass}
                            titleClass={titleClass}

                            header="Total donors registration by "
                            interact={<TimeInput modeArray={["Year", "Month", "Week"]} />}
                            body={
                                <HeadlessChart data={dataDonorRegistration} options={optionsDonorRegistration}>
                                    {({ chartData, chartOptions }) => (
                                        <Line datasetIdKey='id' data={chartData} />
                                    )}
                                </HeadlessChart>
                            }
                            width="w-80"


                        />

                        <HeadlessCard
                            header="Total number of active and completed projects"
                            interact={<TimeInput modeArray={["Year", "Month", "Week"]} />}
                            body={
                                <HeadlessChart data={data_lvlThree} options={options_lvlThree}>
                                    {({ chartData, chartOptions }) => (
                                        <Pie datasetIdKey='id' data={chartData} />
                                    )}
                                </HeadlessChart>
                            }
                            width="w-80"


                            extraStyle={"translate-y-1/4"}
                        />


                    </div>


                </div>

            </div>

        </>
    );
};

export default Analytical;