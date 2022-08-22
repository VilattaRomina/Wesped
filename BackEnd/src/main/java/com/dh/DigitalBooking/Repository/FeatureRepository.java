package com.dh.DigitalBooking.Repository;

import com.dh.DigitalBooking.Model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeatureRepository extends JpaRepository<Feature, Long> {
}