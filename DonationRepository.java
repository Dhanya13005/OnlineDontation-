package com.example.OnlineDonationProject1.repository;

import com.example.OnlineDonationProject1.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
}
