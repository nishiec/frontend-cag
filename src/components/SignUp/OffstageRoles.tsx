import React from 'react';
import { fonts } from '../../theme/styleVars';
import styled from 'styled-components';
import GenericAccordion from '../../genericComponents/Accordion';
import Checkbox from '../../genericComponents/Checkbox';
import yellow_blob_1 from '../../images/yellow_blob_1.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const OffstageRoles = (...props: any) => {
  const offstageRolesObj = {
    general: {
      textHeader: 'General',
      checkboxes: [
        {
          label: 'Directing',
          value: 'Directing'
        },
        {
          label: 'Violence / Fight Design',
          value: 'Violence / Fight Design'
        },
        {
          label: 'Intimacy Design',
          value: 'Intimacy Design'
        },
        {
          label: 'Choreography',
          value: 'Choreography'
        },
        {
          label: 'Casting',
          value: 'Casting'
        },
        {
          label: 'Dramaturgy',
          value: 'Dramaturgy'
        },
        {
          label: 'Dialect Coaching',
          value: 'Dialect Coaching'
        },
        {
          label: 'Musical Directing',
          value: 'Musical Directing'
        }
      ]
    },
    production: {
      textHeader: 'Production',
      checkboxes: [
        {
          label: 'Stage Management',
          value: 'Stage Management'
        },
        {
          label: 'Production Management',
          value: 'Production Management'
        },
        {
          label: 'Board Op',
          value: 'Board Op'
        },
        {
          label: 'Run Crew',
          value: 'Run Crew'
        }
      ]
    },
    scenicAndProperties: {
      textHeader: 'Scenic & Properties',
      checkboxes: [
        {
          label: 'Set Design',
          value: 'Set Design'
        },
        {
          label: 'Technical Direction',
          value: 'Technical Direction'
        },
        {
          label: 'Properties Designer',
          value: 'Properties Designer'
        },
        {
          label: 'Scenic Carpentry',
          value: 'Scenic Carpentry'
        },
        {
          label: 'Charge Artist',
          value: 'Charge Artist'
        }
      ]
    },
    lighting: {
      textHeader: 'Lighting',
      checkboxes: [
        {
          label: 'Lighting Design',
          value: 'Lighting Design'
        },
        {
          label: 'Projection Design',
          value: 'Projection Design'
        },
        {
          label: 'Special Effect Design',
          value: 'Special Effect Design'
        },
        {
          label: 'Master Electrician',
          value: 'Master Electrician'
        }
      ]
    },
    sound: {
      textHeader: 'Sound',
      checkboxes: [
        {
          label: 'Sound Design',
          value: 'Sound Design'
        },
        {
          label: 'Sound Mixer / Engineer',
          value: 'Sound Mixer / Engineer'
        }
      ]
    },
    hairMakeupCostumes: {
      textHeader: 'Hair, Makeup, Costumes',
      checkboxes: [
        {
          label: 'Costume Design',
          value: 'Costume Design'
        },
        {
          label: 'Hair & Wig Design',
          value: 'Hair & Wig Design'
        },
        {
          label: 'Make-up Design',
          value: 'Make-up Design'
        }
      ]
    }
  };

  return (
    <div>
      <Title>SO, WHAT DO YOU LIKE DOING?</Title>
      <TitleSecond>Tell us what positions suit you best.</TitleSecond>
      <TitleThird>Off-Stage Roles</TitleThird>
      <TitleFourth>Select all applicable positions</TitleFourth>

      {Object.keys(offstageRolesObj).map(objKey => {
        const currObjKey = (offstageRolesObj as any)[objKey as any];

        return (
          <>
            <GenericAccordion
              key={`accordion-${currObjKey.textHeader}`}
              textHeader={currObjKey.textHeader}
            >
              <Container>
                <Row>
                  <Col lg="8">
                    {currObjKey.checkboxes.map(
                      (chk: { label: any; value: any }) => {
                        const { label: chkLabel, value: chkValue } = chk;

                        return (
                          <Checkbox
                            fieldType="checkbox"
                            key={`${currObjKey.textHeader}-chk-${chkLabel}-${chkValue}`}
                            label={chkLabel}
                            value={chkValue}
                          />
                        );
                      }
                    )}
                  </Col>
                  <ImageCol lg="4">
                    <Image src={yellow_blob_1} />
                  </ImageCol>
                </Row>
              </Container>
            </GenericAccordion>
            <br></br>
          </>
        );
      })}
    </div>
  );
};

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  font-size: 48px;
`;
const TitleSecond = styled.h2`
  font-family: ${fonts.lora};
  font-size: 28px;
  font-weight: italic;
`;
const TitleThird = styled.h3`
  font-family: ${fonts.mainFont};
  font-size: 20px;
`;
const TitleFourth = styled.h4`
  font-family: ${fonts.lora};
  font-size: 14px;
`;
const ImageCol = styled(Col)`
  display: flex;
  max-height: 100%;
  max-width: 100%;
`;

export default OffstageRoles;
