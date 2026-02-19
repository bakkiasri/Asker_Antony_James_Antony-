"use client";

import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Digital Marketing Strategy & Execution",
      points: [
        "Managed 6 supplement brands with unique positioning and strategy.",
        "Executed 50+ campaigns annually across Amazon Ads, Google Ads, and social media.",
        "Improved SEO rankings and organic traffic consistently.",
      ],
    },
    {
      title: "E-Commerce Platform Management",
      points: [
        "Oversaw 6+ platforms (Amazon, eBay, Walmart, Shopify).",
        "Optimized 200+ product listings including A+ content.",
        "Managed POS integrations and backend systems.",
      ],
    },
    {
      title: "Team Leadership & Training",
      points: [
        "Led a team of 8 across marketing and support.",
        "Conducted weekly KPI strategy meetings.",
        "Supervised onboarding for new hires.",
      ],
    },
    {
      title: "Corporate & Cross-Functional Coordination",
      points: [
        "Coordinated with HR, management, and vendors.",
        "Managed Facebook Ads and Amazon SAS accounts.",
        "Handled vendor communications.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 8 },
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Case Studies
        </Typography>

        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {caseStudies.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12} // 1 column mobile
              sm={6} // 2 columns tablet
              md={4} // 3 columns desktop
              lg={3} // 4 columns large screens
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  boxShadow: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: 10,
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  alt={item.title}
                  sx={{
                    height: { xs: 160, sm: 180, md: 200 },
                  }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      m: 0,
                      color: "text.secondary",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.points.slice(0, 2).map((point, i) => (
                      <li key={i} style={{ marginBottom: 6 }}>
                        {point}
                      </li>
                    ))}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    pb: 2,
                  }}
                >
                  <Button size="small">Share</Button>
                  <Button size="small" variant="contained">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
