import { Card, CardContent } from "@mui/material";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const UsersAndBenefits = () => {
  const userTypes = [
    {
      type: 'Developers',
      benefits: [
        'Efficient task tracking for project management',
        'Integration with development tools',
        'Collaboration on code-related tasks',
      ],
    },
    {
      type: 'Corporate Professionals',
      benefits: [
        'Streamlined workflow for team collaboration',
        'Task prioritization and deadline management',
        'Centralized communication and updates',
      ],
    },
    {
      type: 'Bankers',
      benefits: [
        'Secure task management for financial processes',
        'Audit trails for compliance',
        'Efficient tracking of financial tasks',
      ],
    },
    // Add more user types and benefits as needed
  ];

  return (
    <div className="my-4 mx-4">
      <SectionTitle heading="Who Can be Benefited?"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {userTypes.map((userType, index) => (
        <Card key={index} className="">
          <CardContent>
            <h3 className="text-xl font-bold mb-2">{userType.type}</h3>
            <ul className="list-disc ml-6">
              {userType.benefits.map((benefit, i) => (
                <li key={i} className="mb-2">
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default UsersAndBenefits;
